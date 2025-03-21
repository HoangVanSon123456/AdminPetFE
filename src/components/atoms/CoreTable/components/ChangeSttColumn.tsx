import PlusIcon from "public/styles/icons/PlusIcon";
import { DialogTable } from "@/components/atoms/CoreTable/components/DialogTable";
import { useDialog } from "@/components/Hooks/dialog/useDialog";

type Props = {
  tableName?: string;
  columnsChecked: any;
  columns: any;
};

export const ChangeSttColumn = (props: Props) => {
  const { tableName, columnsChecked, columns } = props;
  const { showDialog } = useDialog();

  if (!tableName) return null;

  return (
    <div className="absolute right-5 top-5">
      <PlusIcon
        onClick={() =>
          showDialog(
            <DialogTable
              columns={columns}
              columnsChecked={columnsChecked}
              tableName={tableName}
            />
          )
        }
      />
    </div>
  );
};
