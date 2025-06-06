import { API } from "../../../type/api";
import { Method } from "../../../type/method";

export class GetToken extends API {
  constructor(params: { user_id: number }) {
    super("/user/frp/token", Method.GET, params, {});
  }
}
