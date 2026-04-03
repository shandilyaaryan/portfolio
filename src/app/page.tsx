import { ProfileCover } from "@/components/profile-cover";
import { ProfileHeader } from "@/components/profile-header";
import { Overview } from "@/components/overview";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/separator";

export default function Home() {
  return (
    <main className="mx-auto md:max-w-3xl">
      <ProfileCover />
      <ProfileHeader />
      <Separator />
      <Overview />
      <SocialLinks />
      <Separator />
    </main>
  );
}
