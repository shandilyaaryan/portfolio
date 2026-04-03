import { ProfileCover } from "@/components/profile-cover";
import { ProfileHeader } from "@/components/profile-header";

export default function Home() {
  return (
    <main className="mx-auto md:max-w-3xl">
      <ProfileCover />
      <ProfileHeader />
    </main>
  );
}
