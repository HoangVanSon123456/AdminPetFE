import { CurrencyFormatCustom } from "@/components/UI/CurrencyFormatCustom";
import { useDate } from "@/components/Hooks/date/useDate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import _ from "lodash";

type Props = {
  row: any;
  render?: any;
  fieldName?: string;
  open?: boolean;
  handleClick?: any;
  nameCheck?: string;
};

export const CellContent = (props: Props) => {
  const { render, row, fieldName, open, handleClick, nameCheck } = props;
  const { checkDateValid, convertToDate } = useDate();

  if (row && render) {
    return render(row);
  }

  if (row && fieldName) {
    const val = _.get(row, fieldName);

    if (fieldName === "a")
      return (
        <KeyboardArrowDownIcon
          onClick={() => handleClick()}
          fontSize="small"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        />
      );

    if (fieldName === nameCheck)
      return (
        <div className="cursor-pointer" onClick={() => handleClick()}>
          {val}
        </div>
      );

    if (_.isNumber(val)) return <CurrencyFormatCustom amount={val} />;

    if (checkDateValid(val)) return convertToDate(val);

    return val;
  }

  return null;
};
