import React from 'react';
import PostCard from './PostCard';

const Feed = () => {
  const posts = [
    {
      title: "Left Ventricular Noncompaction in a 25-Year-Old Athlete",
      body: "A 25-year-old male athlete experienced syncope during a marathon. Cardiac evaluation, including echocardiography and MRI, revealed prominent trabeculations and deep intertrabecular recesses in the left ventricle, consistent with Left Ventricular Noncompaction Cardiomyopathy (LVNC). Genetic testing was conducted to assess familial risk. The patient was advised to limit intense physical activity and started on heart failure management protocols. This case underscores the importance of considering LVNC in young athletes presenting with syncope.",
      image:
        "https://imgs.search.brave.com/SwNS1npnTd0RJtqd0lf_hya5M8VsUA2-gYkdniv901Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWpvdXJuYWwub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzAyL0luQ29tbXVu/aXR5LVJlYWRpbmct/R3JvdXBzLU1hcF9G/ZWItMjAyNS5qcGc",
    },
    {
      title: "Maple Syrup Urine Disease in a 5-Day-Old Neonate",
      body: "A 5-day-old neonate exhibited poor feeding, lethargy, and a distinctive sweet-smelling urine odor. Laboratory analysis showed elevated levels of branched-chain amino acids, and genetic testing confirmed Maple Syrup Urine Disease (MSUD), a rare metabolic disorder. The infant was managed with a specialized diet restricting branched-chain amino acids and close metabolic monitoring. Early diagnosis and intervention were crucial in preventing severe neurological damage. This case highlights the importance of newborn screening and prompt management in metabolic disorders.",
      image:
        "https://imgs.search.brave.com/bJOxXkH3P7hXrfNVrSNHyC5WvsEjY-P3a_8qymMQMYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM4LzkyLzcw/LzM2MF9GXzgzODky/NzAxNl9PMHJEeU95/VUtLMDVhS0l0a0Nx/WGhYd1hqdTZHM2oz/NS5qcGc",
    },
  ];

  return (
    <div className="max-w-7xl w-full flex flex-col justify-center mx-auto px-4 space-y-6">
      {posts.map((post, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;