type Props = { alert: string | undefined };

const Alerts = ({ alert }: Props) => {
  console.log(alert);

  return (
    <div className="rounded-md bg-red-50 p-4">
      <h3 className="text-sm font-medium text-red-800">{alert} </h3>
    </div>
  );
};

export default Alerts;
