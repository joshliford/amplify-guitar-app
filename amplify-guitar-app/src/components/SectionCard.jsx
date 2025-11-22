export default function SectionCard({ title, icon, children }) {
  return (
    <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-5xl rounded-xl shadow-lg hover:shadow-xl bg-white dark:bg-[#1A1F2A]">
      <div className="p-2 flex items-center justify-between shadow-lg rounded-t-lg border-b-4 border-[#D4A574] bg-[#1F5D3D] dark:bg-[#D4A574] dark:border-gray-600">
        <div className="flex justify-between items-center w-full p-2">
          <h4 className="m-2 text-2xl font-semibold text-[#FFFEF7] dark:text-black font-['Lora']">
            {title}
          </h4>
          {icon}
        </div>
      </div>
      <div className="p-4 font-['Nunito_Sans']">{children}</div>
    </div>
  );
}
