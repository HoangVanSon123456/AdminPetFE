import { CoreButton } from "@/components/Form/CoreButton";
import CoreInput from "@/components/Form/CoreInput";
import { useDialog } from "@/components/Hooks/dialog/useDialog";
import ThreeDotVertical from "public/styles/icons/ThreeDotVertical";
import { CoreDialog } from "@/components/UI/CoreDialog";
import { PRIMARY } from "@/helper/colors";
import { useFormCustom } from "@/lib/form";
import { useAppDispatch } from "@/redux/hook";
import { addOneTableConfig } from "@/redux/reducer/tableReducer";
import { TRANSLATE } from "@/routes";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { ReactNode } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ColumnProps } from "..";

const defaultValues = {
  search: "",
  checkedList: [],
};

export const DialogTable = ({
  columns,
  columnsChecked,
  tableName,
}: {
  tableName?: string;
  columns: {
    header: ReactNode;
    fieldName: string;
  }[];
  columnsChecked: (ColumnProps | undefined)[];
}) => {
  const { t } = useTranslation(TRANSLATE.COMMON);
  const { hideDialog } = useDialog();

  const { control, watch, getValues, setValue, reset, handleSubmit } =
    useFormCustom<{
      search: string;
      checkedList: {
        header: ReactNode;
        fieldName: string;
      }[];
    }>({
      defaultValues: {
        ...defaultValues,
        checkedList: columnsChecked,
      },
    });

  const grid = 8;

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: any
  ): React.CSSProperties => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "#f5abb3" : "#849efa",
    ...draggableStyle,
  });

  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (input) => {
    if (tableName) {
      dispatch(
        addOneTableConfig({
          tableName,
          columns: input.checkedList.map((item) => item.fieldName),
        })
      );
    }

    hideDialog();
  });

  const reOrder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const newData = reOrder(
      watch("checkedList"),
      result.source.index,
      result.destination.index
    );
    setValue("checkedList", newData as any);
  };

  return (
    <CoreDialog title="TÙY BIẾN CỘT" onClose={hideDialog} width={782}>
      <div className="flex w-full min-h-[300px] p-10">
        <div
          className="flex w-1/2 flex-col px-10"
          style={{
            borderRight: "1px solid #DFE0EB",
          }}
        >
          <CoreInput label="Tìm kiếm cột" control={control} name={"search"} />

          {columns.map((item) => {
            return (
              <div className="flex gap-5 mt-5" key={item.fieldName}>
                <Checkbox
                  checked={watch("checkedList")
                    .map((item) => item.fieldName)
                    .includes(item.fieldName)}
                  onChange={(e, checked) => {
                    const curValue = getValues("checkedList");
                    if (checked) setValue("checkedList", [...curValue, item]);
                    else if (
                      curValue.map((i) => i.fieldName).includes(item.fieldName)
                    ) {
                      setValue(
                        "checkedList",
                        curValue.filter(
                          (ele) => ele.fieldName !== item.fieldName
                        )
                      );
                    }
                  }}
                />

                <div className="flex items-center">
                  <Typography variant="body1">{item.header}</Typography>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex w-1/2 px-10 flex-col">
          <div className="h-28 flex items-center">
            <Typography variant="subtitle1">
              {`CỘT ĐƯỢC CHỌN (${watch("checkedList").length})`}
            </Typography>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot): JSX.Element => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    background: snapshot.isDraggingOver
                      ? "lightblue"
                      : "lightgrey",
                    padding: "16px",
                  }}
                >
                  {watch("checkedList").map((item, index) => (
                    <Draggable
                      key={item.fieldName}
                      draggableId={item.fieldName}
                      index={index}
                    >
                      {(provided, snapshot): JSX.Element => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex h-20 w-full rounded-sm items-center justify-between px-5"
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div className="flex items-center">
                            <ThreeDotVertical />
                            <Typography>{item.header}</Typography>
                          </div>

                          <IconButton
                            onClick={() => {
                              const curValue = getValues("checkedList");
                              setValue(
                                "checkedList",
                                curValue.filter(
                                  (ele) => ele.fieldName !== item.fieldName
                                )
                              );
                            }}
                          >
                            <CloseOutlinedIcon fontSize="small" />
                          </IconButton>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <Box
            className="h-20 flex items-center mt-5 cursor-pointer"
            onClick={() => reset(defaultValues)}
          >
            <Typography
              variant="body2"
              sx={{
                color: PRIMARY,
              }}
            >
              Bỏ chọn tất cả các cột
            </Typography>
          </Box>
        </div>
      </div>

      <div className="flex justify-center gap-10 py-17">
        <CoreButton
          theme="cancel"
          onClick={() => {
            hideDialog();
          }}
        >
          {t("common:btn.cancel")}
        </CoreButton>
        <CoreButton theme="submit" onClick={onSubmit}>
          {t("common:btn.confirm")}
        </CoreButton>
      </div>
    </CoreDialog>
  );
};
