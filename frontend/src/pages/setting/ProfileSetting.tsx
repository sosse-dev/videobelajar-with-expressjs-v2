import FooterContent from "@/components/pages/_generic/footer/FooterContent";
import ProfileHeader from "@/components/pages/setting/ProfileHeader";
import ProfileForm from "@/components/pages/setting/ProfileForm";
import LeftBar from "@/components/pages/_generic/setting/LeftBar";
import Navbar from "@/components/pages/_generic/navbar/Navbar";
import { useAuth } from "@/hooks/use-auth";

export default function ProfileSetting() {
  const user = useAuth();

  return (
    <div className="mx-auto max-w-7xl">
      <Navbar showDropdown={true} />

      <main className="container bg-yellow-50 mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <LeftBar path="/profile" />

          {/* Main Content */}
          <div className="flex-1 flex flex-col bg-white rounded-lg border border-[#3a3541]/[0.12] p-6 space-y-6">
            <ProfileHeader user={user} />
            <hr className="border-[#3a3541]/[0.12]" />
            {/* Form Section */}
            <ProfileForm user={user} />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 pt-12 px-7 xl:px-0">
        <FooterContent />
      </footer>
    </div>
  );
}
