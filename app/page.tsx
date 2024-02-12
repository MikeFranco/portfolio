import BriefDescription from "./ui/home/brief-description";
import MyStack from "./ui/home/my-stack";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col p-6 w-7/12">
        <BriefDescription />
        <div className="flex flex-col text-center pt-10">
          <p className="text-4xl py-8">My Stack</p>
          <div className="flex flex-row justify-evenly gap-24">
            <MyStack />
          </div>
        </div>
      </div>
    </main>
  );
}
