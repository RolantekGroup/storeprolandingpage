import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ContactSales from "../form/ContactSales";
import { MdClose } from "react-icons/md";

const Modal = () => {
  return (
    <Dialog.Root>
      {/* Button to trigger the modal */}
      <Dialog.Trigger asChild>
        <button className="bg-orange-500 text-white px-3 py-3 rounded-[40px]">
          Contact Sales
        </button>
      </Dialog.Trigger>

      {/* Modal structure */}
      <Dialog.Portal>
        {/* Overlay that dims the background */}
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-10" />

        {/* Modal content */}
        <Dialog.Content 
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-20">
          
          <Dialog.Title className="text-lg font-bold mb-4">Contact Sales</Dialog.Title>

          {/* Contact sales form */}
          <ContactSales />

          {/* Close button */}
          <Dialog.Close asChild>
            <div className="absolute top-2 right-2">
              <button className="mt-4 bg-gray-200 text-black px-4 py-2 rounded">
                <MdClose />
              </button>
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
