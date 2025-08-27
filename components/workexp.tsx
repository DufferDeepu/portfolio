import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  link: string;
  image: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Prodigy Infotech",
    position: "Software Developer Intern",
    location: "Remote",
    duration: "Aug 2025 – Present",
    link: "https://prodigyinfotech.dev/",
    image: "/prodigy.svg",
  },
  {
    company: "100xDevs",
    position:
      "<b>Student</b> ( Cohort-based program focused on <br /> full-stack web development, DevOps,<br />  and blockchain )",
    location: "Remote",
    duration: "Aug 2024 – Present",
    link: "https://prodigyinfotech.dev/",
    image: "/100xDevs.jpg",
  },
  {
    company: "Stulz India Pvt Ltd",
    position: "Quality Engineer",
    location: "Mumbai, India",
    duration: "Feb 2022 – Feb 2024",
    link: "https://www.stulz.com/",
    image: "/stulz.svg",
  },
  {
    company: "Suwinka Engineering Pvt Ltd",
    position: "Graduate Engineer Trainee",
    location: "Mumbai, India",
    duration: "Mar 2021 – Feb 2022",
    link: "",
    image: "/suwinka.jpeg",
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-5">
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <Link
            className="exp cursor-default"
            key={exp.company.replace(" ", "-")}
            href={exp.link}
            target="_blank"
          >
            <article className="mt-3 mb-3 flex md:items-center items-start">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-10 h-10 mr-3 rounded-md mt-0.5 md:mt-0"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300">
                    {exp.company}
                  </h1>
                  <p className="text-sm text-gray-300">{exp.location}</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p
                    className="text-sm text-neutral-400"
                    dangerouslySetInnerHTML={{ __html: exp.position }}
                  ></p>

                  <p
                    className={`text-[10px] text-neutral-400 text-end leading-[1.3em] tracking-tighter ${jetbrainsMono.className}`}
                  >
                    {exp.duration}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
