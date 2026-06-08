import Image from 'next/image';

// 1. Simulate data fetching (You can later replace this with a fetch to your database/API)
async function getTeamData() {
  return [
    { 
      name: "Dr. Sreenath Madathil", 
      role: "Principal Investigator", 
      initials: "SM", 
      image: "/assets/team/dr-madathil.jpg" 
    },
    { 
      name: "Yaya Kane", 
      role: "Lead Developer", 
      initials: "YK", 
      image: "/assets/team/yaya-kane.jpg" 
    }
  ];
}

// 2. The Page Component
export default async function TeamPage() {
  const teamData = await getTeamData();

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
      
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="space-y-8">
          {teamData.map((member, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              
              {/* Circular Profile Image */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-inner relative">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Member Details */}
              <div className="flex-grow">
                <p className="font-bold text-xl text-gray-900">{member.name}</p>
                <p className="text-blue-700 font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm mt-1">Faculty of Dental Medicine and Oral Health Sciences</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}