import BriefDescription from "./ui/home/brief-description";
import Education from "./ui/home/education";
import MyStack from "./ui/home/my-stack";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col p-6 w-7/12">
        <BriefDescription />
        <MyStack />
        <Education />
      </div>
    </main>
  );
}
