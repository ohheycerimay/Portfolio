import React from "react";
import aphoto3 from "./aphoto3.jpeg";
import Modal from "./Modal";

function Home(props) {
  return (
    <section class="bg-white bg-opacity-50 py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full md:w-1/2">
            <h2 class="text-4xl font-bold mb-4">// SOFTWARE ENGINEER //</h2>
            <p class="text-xl mb-6">
              <Modal>
                <h2>Ceri</h2>
                <p>Modal content goes here.</p>
              </Modal>
            </p>
          </div>
          <div class="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={aphoto3}
              alt="Gothic Image"
              class="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
