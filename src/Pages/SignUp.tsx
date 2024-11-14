import logo from "../../public/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MyContext } from "../Components/Context";
import { useContext } from "react";

type signupFormValues = {
  email: string;
  password: string;
  resetPassword: string;
};

export default function SignUp() {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { errorMessage, setErrorMessage }: any = context;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<signupFormValues>();

  const email = watch("email", "");
  const password = watch("password", "");
  const resetPassword = watch("resetPassword", "");

  const handleRegister = () => {
    if (email === "" || password === "" || resetPassword === "") {
      return;
    }

    if (password !== resetPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Store the email and password in local storage
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);
    localStorage.setItem("registeredResetPassword", resetPassword);

    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <img src={logo} alt="" />
        <div className="bg-[#161D2F] rounded-[10px] w-[327px] h-[420px] mt-[58px] px-[24px] pt-[24px] pb-[32px] xl:w-[400px] xl:h-[428px] xl:px-[32px]">
          <h1 className="text-[#FFFFFF] text-[32px] font-light">Sign Up</h1>
          <form onSubmit={handleSubmit(handleRegister)}>
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[40px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal xl:w-[336px]"
              type="text"
              placeholder="Email address"
              {...register("email", { required: "Can’t be empty" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal xl:w-[336px]"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Can’t be empty" })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
            <input
              className="bg-[#161D2F] hover:border-b-[#FFFFFF] cursor-pointer border-b-[#5A698F] border-b mt-[24px] outline-none w-[279px] h-[37px] pl-[16px] text-[#ffffff] text-[15px] font-light leading-normal xl:w-[336px]"
              type="password"
              placeholder="Repeat Password"
              {...register("resetPassword", { required: "Can’t be empty" })}
            />
            {errors.resetPassword && (
              <p className="error">{errors.resetPassword.message}</p>
            )}
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button
              className="mt-[40px] w-[279px] h-[48px] bg-[#FC4747] rounded-[6px] text-[#FFFFFF] text-[13px] font-light leading-normal hover:bg-[#FFFFFF] hover:text-[#161D2F] xl:w-[336px]"
              onClick={handleRegister}
            >
              Create an account
            </button>
          </form>
          <p className="text-[#FFFFFF] text-[15px] font-light leading-normal text-center mt-[24px] xl:mb-[32px]">
            Alread have an account?
            <button
              className="text-[#FC4747] ml-[8px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
