import { transActions } from "../../Datas";
import "./WidgetLg.css";

const WidgetLg = () => {
  const Btn = ({ type }) => {
    return <button className={"widgetBtn " + type}>{type}</button>;
  };

  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest TransActions</h3>
      <table className="WidgetLgTable w-100">
        <tr className="WidgetLgTr">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>

        {transActions.map((item) => (
            <tr key={item.id} className="WidgetLgTr">
            <td className="d-flex align-items-center">
              <img
                className="WidgetLgImg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
              <span className="WidgetLgCustomer">{item.customer}</span>
            </td>
            <td className="WidgetLgDate">{item.date}</td>
            <td className="WidgetLgAmount">${item.amount}</td>
            <td className="WidgetLgStatus">
              <Btn type={item.status} />
            </td>
          </tr>
        ))}

      </table>
    </div>
  );
};

export default WidgetLg;
