import React from 'react';

const FooterList = ({ title, listItem }) => (
  <div>
    <h4 className='font-bold text-orange-400'>{title}</h4>
    <ul>
      {listItem.map((item) =>
        item.listData.map((data) => (
          <li key={data.text}>
            <a href={data.url} className="text-gray-300 hover:underline"  rel="noopener noreferrer">
              {data.text}
            </a>
          </li>
        ))
      )}
    </ul>
  </div>
);

export default FooterList;
