import { Github, Linkedin, Mail } from "lucide-react";

export function IdCard() {
  return (
      <>
        <div className="max-w-sm w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200/80 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
              <img
                  src="https://avatars.githubusercontent.com/u/83833804?v=4"
                  alt="Junbeom"
                  className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Junbeom Kim</h2>
              <p className="text-primary font-semibold">Software Engineer</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 border-b-2 border-primary/50 pb-1">
              Details
            </h3>
            <div className="mt-4 space-y-2 text-gray-600">
              <p>
                <strong>Location:</strong> Seoul, South Korea
              </p>
              <p>
                <strong>Interests:</strong> Go, TypeScript, DevOps
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a
                href="https://github.com/laughing_egg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/junbeom-lee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
                href="mailto:junbeom.lee@example.com"
                className="text-gray-500 hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </>
  );
}
