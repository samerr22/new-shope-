import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  

 

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(`/api/student/getAllstudents`);
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setStudents(data.students);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    
      fetchStudents();
    
  }, []);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <div>
      <button>
      {currentUser.isAdmin && (
          <Link to={'/View'}>
            <button
            className="  bg-slate-500 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
              type='button'
              gradientDuoTone='purpleToPink'
            >
            View new sup
            </button>
          </Link>
        )}

      </button>
      </div>
    </div>
  );
}
