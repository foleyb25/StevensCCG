<template>
  <div
    class="flex flex-col items-center justify-center p-8 font-din text-white"
  >
    <h1 class="text-4xl font-bold mb-4 mt-48">Drop in and say hi 👋</h1>
    <p class="mb-8">
      Whether you are requesting a quote or simply reaching out, fill in the
      following form and we'll get back to you within 24 hours.
    </p>

    <form @submit.prevent="submitForm" class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            Your name:
          </label>
          <input
            v-model="formObject.name"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Jane Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Your email:
          </label>
          <input
            v-model="formObject.email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          >
            Your message to us:
          </label>
          <textarea
            v-model="formObject.message"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="message"
            rows="5"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mt-6">
        <div class="w-full px-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formObject = reactive({
  name: "",
  email: "",
  message: "",
});
const submitForm = () => {
  // Here you would handle the form submission, e.g., make an API call
  console.log(this.form);
  alert("Form submitted! Check the console for the form data.");
};
</script>
