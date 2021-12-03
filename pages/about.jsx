import Image from "next/image";
import ProfilePic from "../public/profile.jpg";

export default function About() {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src={ProfilePic}
          alt="profile image"
          width="200px"
          height="200px"
          className="rounded"
        />
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2 hover:bg-gray-600 hover:text-white">
            About
          </span>
        </div>
      </div>
    </div>
  );
}