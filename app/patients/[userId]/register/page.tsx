import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const Register = async ({params: {userId}}: SearchParamProps) => {
 const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="logo">
          <Image
            src="/assets/icons/logo-icon.svg"
            height={40}
            width={40}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <h2 className="text-lg font-bold mb-12 ml-2">HealthPulse</h2>
          </div>
          <RegisterForm user={user}/>
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
      <Image src="/assets/images/register-img.png" height={1000} width={1000} alt="patient" className="side-img max-w-[390px]"/>
    </div>
  );
};

export default Register;
