import { ActionType } from "../action-types"

interface depositAction {
  type: ActionType.DEPOSIT
  payload:number
}
interface withdrawAction {
  type: ActionType.WITHDRAW
  payload:number
}
interface bankruptAction {
  type: ActionType.BANKRUPT
}

export type Action = depositAction | withdrawAction | bankruptAction