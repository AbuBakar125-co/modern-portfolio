import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="Abu Bakar Saddique - WordPress Developer"
        width={700}
        height={920}
        className="translate-z-0 object-contain"
        style={{ height: "88vh", width: "auto", maxWidth: "none" }}
      />
    </div>
  );
};

export default Avatar;
