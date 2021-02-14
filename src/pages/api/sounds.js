// TODO offload this data to a database
import sounds from "../sounds.json";

export default (req, res) => {
  res.status(200).json(sounds);
};
