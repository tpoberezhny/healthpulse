import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* Need to add Passkey modal */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center">
          <Image
            src="/assets/icons/logo-icon.svg"
            height={40}
            width={40}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <h2 className="text-lg font-bold mb-12 ml-2">HealthPulse</h2>
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-end text-dark-600 xl:text-left">
              © 2024 HealthPulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image src="/assets/images/onboarding-img.png" height={1000} width={1000} alt="patient" className="side-img max-w-[50%]"/>
    </div>
  );
}
