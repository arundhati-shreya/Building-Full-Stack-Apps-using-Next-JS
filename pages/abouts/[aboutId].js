import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { aboutId } = router.query;


  const details = [
    { id: '1', name: 'Yash', role: 'Senior Developer' },
    { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
    { id: '3', name: 'Suresh', role: 'Frontend Developer' }
  ];


  const member =  details.find(member => member.id === aboutId);

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <div>
          <h1>Developer doesn't exist</h1>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
