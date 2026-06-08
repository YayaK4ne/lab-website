import teamData from '../../data/team.json';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold">Our Team</h1>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="space-y-8">
          {teamData.map((member, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              
              {/* Image Container - Now Centered within the flex item */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-inner">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={96} // Adjusted for larger size
                  height={96} // Adjusted for larger size
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Block - Adjusted alignment */}
              <div className="flex-grow">
                <p className="font-bold text-xl text-gray-900">{member.name}</p>
                <p className="text-blue-700 font-medium">{member.role}</p>
                {/* Optional: Add brief bio field to JSON and render here */}
                {/* <p className="text-gray-600 mt-2 text-sm">Brief bio placeholder.</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}