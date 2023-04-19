export interface IAppType {
  collapse: boolean,
  robotAccount: IRobotAccount[],
  currentRobotAccount: IRobotAccount
}

export interface IUserType {
  username: string
  token: string | null
}

export interface IRobotAccount {
  wxid: string
  name: string
}