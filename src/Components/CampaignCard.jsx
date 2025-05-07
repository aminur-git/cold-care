import { MdContactMail } from "react-icons/md";

const CampaignCard = ({ campaign }) => {
  console.log(campaign);
  const { title, image, description, status, contactInfo, division } = campaign;

  return (
    <div>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src={image} alt={title} />
        <div className="flex items-center justify-center gap-4 mt-2 ">
          <MdContactMail></MdContactMail>
          <p className="text-gray-600 dark:text-gray-400 text-xs text-center">{contactInfo} </p>
        </div>

        <div className="p-6">
          <div>
            <span className="text-xs font-medium uppercase">
              {status === "active" ? (
                <div className="badge badge-outline badge-info">{status}</div>
              ) : (
                <div className="badge text-white badge-success">{status}</div>
              )}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              <div>
                {title}{" "}
                <span className="ml-2 text-xs text-gray-400">
                  || {division}
                </span>
              </div>
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              {status === "active" ? (
                <button className="btn btn-info  text-white">Donate</button>
              ) : (
                <div disabled="disabled" className="btn">
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
