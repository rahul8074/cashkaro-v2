import Text from "./Text";
const FooterItems = ({ data }) => {
  return (
    <>
      {Object.keys(data).map((key) => {
        return (
          <div className="mb-6 md:mb-0" key={key}>
            <Text tag="h3" classes="font-semibold mb-3" text={key} />
            <ul className="text-silverText space-y-2">
              {data[key].map((item, index) => {
                return <Text tag="li" classes="cursor-pointer" key={index} text={item.text} />;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default FooterItems;
