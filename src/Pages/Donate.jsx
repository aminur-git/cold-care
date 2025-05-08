import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Donate = () => {
  const { campaigns, loading, user } = useContext(AuthContext);
  const { id } = useParams();
  const currentId = parseInt(id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const donate = form.get("donate");

    const formData = { name, email, phone, donate };
    console.log(formData);
    toast.success("Thank you for your contribution!");
    e.target.reset();

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  if (loading) {
    return (
      <div className="flex w-3/4 flex-col gap-4 m-10">
        <div className="skeleton h-[400px] md:h-[500px] w-full"></div>
        <div className="skeleton h-10 w-full md:w-xl"></div>
        <div className="skeleton h-24 w-full"></div>
        <div className="skeleton h-6 w-[150px]"></div>
      </div>
    );
  }

  const campaign = campaigns.find((campaign) => campaign.id === currentId);
  console.log(campaign);

  if (!campaign) {
    return <div className="m-10 text-lg font-medium">Campaign not found.</div>;
  }

  const { title, image, description, status, contactInfo, division } = campaign;

  return (
    <div>
      <div className="bg-[#0095c3f3] ">
        <Navbar></Navbar>
      </div>
      <div
        className="h-screen hero-overlay"
        style={{
          backgroundImage: `url(/overlay.png), url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Toaster />
        </div>
        <div className="text-base-300 text-center px-2 pt-10 hero-overlay">
          <div className="space-y-3 ">
            <h1 className="text-2xl dark:text-gray-100 md:text-4xl font-semibold">
              {title}
            </h1>
            <p className="text-sm dark:text-gray-300 w-[340px] md:w-xl mx-auto">
              {description}
            </p>
            <p className="text-sm text-gray-400 w-[340px] md:w-xl mx-auto">
              {contactInfo}
            </p>
          </div>
          <div className=" mt-20 space-y-6  py-6 md:w-xl mx-auto border shadow-md rounded shadow-blue-300 bg-[#0000007c]">
            <h1 className="text-xl font-semibold bg-info py-2 text-black">
              Contribute Your Warmth
            </h1>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-6 justify-around items-stretch  "
            >
              <div className="space-x-6 dark:text-gray-100 ">
                <label className="dark:text-gray-100" htmlFor="">
                  Name
                </label>
                <input
                  className="bg-none px-2 py-1 border dark:text-gray-100  border-gray-500 "
                  type="text"
                  name="name"
                  placeholder="Your name"
                  id=""
                  required
                />
              </div>
              <div className="space-x-6">
                <label className="dark:text-gray-100" htmlFor="">
                  Email
                </label>
                <input
                  className="bg-none px-2 py-1 border dark:text-gray-100 border-gray-500 "
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="your@mail.com"
                  id=""
                  required
                />
              </div>
              <div className="space-x-6 dark:text-gray-100">
                <label htmlFor="" className="dark:text-gray-100">
                  Phone
                </label>
                <input
                  type="tel"
                  className="validator tabular-nums bg-none px-2 py-1 border dark:text-gray-100 border-gray-500"
                  required
                  placeholder="019167890**"
                  pattern="[0-9]*"
                  minlength="11"
                  maxlength="11"
                  title="Must be 11 digits"
                />
              </div>
              <div className="space-x-6">
                <label className="dark:text-gray-100" htmlFor="">
                  Address
                </label>
                <input
                  className="bg-none px-2 py-1 border dark:text-gray-100 border-gray-500 "
                  type="text"
                  name="address"
                  placeholder="Level-4, 34, Awal Centre, Banani, Dhaka"
                  id=""
                  required
                />
              </div>
              <div className="space-x-6">
                <label htmlFor="" className="dark:text-gray-100">
                  Willing to donate :
                </label>
                <input
                  className="bg-none px-2 py-1 border border-gray-500 dark:text-gray-100 "
                  type="text"
                  name="donate"
                  placeholder="1pcs Jacket, Kombol x2  "
                  id=""
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-info w-[200px] mx-auto">
                Donate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
