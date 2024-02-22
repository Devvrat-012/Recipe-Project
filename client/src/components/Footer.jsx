export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-gray-600 text-white py-8 mx-2 rounded-lg ">
      <div class="container mx-5 flex flex-col md:flex-row items-center justify-between">
        <div class="text-sm">
          &copy; {year} <span className="font-bold">FoodieDev.</span> All Rights
          Reserved.
        </div>
        <p className="mr-7">We are comitted to serve you!</p>
      </div>
    </footer>
  );
}
