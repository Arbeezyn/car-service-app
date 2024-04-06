import RequestModel from "../models/Request.model";
import ArchiveModel from "../models/Archive.model";

export const transfer = async (req: any, res: any) => {
  const reqId = req.params.id;
  try {
    const requestData = await RequestModel.findById(reqId).exec();

    if (!requestData) {
      return res.status(404).json({
        message: "Данные не найдены",
      });
    }

    const { name, email, phone, breakdownType, carModel, message } =
      requestData;

    const archiveData = new ArchiveModel({
      name,
      email,
      phone,
      carModel,
      breakdownType,
      message,
    });

    await archiveData.save();

    await RequestModel.findByIdAndDelete(reqId).exec();

    res.status(200).json({
      message: "Данные перенесены",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Не удалось перенести данные, попробуйте снова",
    });
  }
};

export const create = async (req: any, res: any) => {
  const { name, email, phone, carModel, breakdownType, message } = req.body;

  const doc = new RequestModel({
    name,
    email,
    phone,
    carModel,
    breakdownType,
    message,
  });
  try {
    const request = await doc.save();
    res.json(request);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось отправить заявку, попробуйте снова",
    });
  }
};

export const remove = async (req: any, res: any) => {
  try {
    const reqId = req.params.id;
    const doc = await RequestModel.findByIdAndDelete({ _id: reqId }).exec();
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

export const getOne = async (req: any, res: any) => {
  try {
    const reqId = req.params.id;
    const doc = await RequestModel.findOne({ _id: reqId }).exec();

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

export const getAll = async (req: any, res: any) => {
  try {
    const data = await RequestModel.find();
    res.json(data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    res.status(500).send("Ошибка получения данных, повторите снова");
  }
};
