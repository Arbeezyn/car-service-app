import ArchiveModel from "../models/Archive.model";

export const getOneArchive = async (req: any, res: any) => {
  try {
    const reqId = req.params.id;
    const doc = await ArchiveModel.findOne({ _id: reqId }).exec();

    if (!doc) {
      res.status(404).json({ message: "Заявка не найдена" });
    } else {
      res.json(doc);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
};

export const getAllArchive = async (req: any, res: any) => {
  try {
    const data = await ArchiveModel.find();
    res.json(data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    res.status(500).send("Ошибка получения данных, повторите снова");
  }
};

export const removeArchive = async (req: any, res: any) => {
  try {
    const reqId = req.params.id;
    const doc = await ArchiveModel.findByIdAndDelete({ _id: reqId }).exec();
    if (!doc) {
      res.status(404).json({ message: "Заявка не найдена" });
    } else {
      res.status(200).json({ message: "Заявка удалена" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
};
