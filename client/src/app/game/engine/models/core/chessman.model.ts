export interface MoveDetails {
  rowMove: number;
  colMove: number;
  pawnsArrangement: any[];
}

export interface FromOldToNewPositionMove {
  rowOld: number;
  colOld: number;
  rowNew: number;
  colNew: number;
}

export abstract class Chessman {

  constructor(
    protected row: number,
    protected col: number,
    protected name: string,
    protected team: string,
    protected bgImg: string
  ) {}

  abstract checkPawnMove(move: MoveDetails): boolean; // method check pawn move and return the answer

  public getPawnName() {
    return this.name;
  }

  public getPawnTeam() {
    return this.team;
  }

  public getPawnArrangement() {
    return {
      row: this.row,
      col: this.col
    };
  }

  public setPawnPosition(moveDetails: MoveDetails) {
    this.row = moveDetails.rowMove;
    this.col = moveDetails.colMove;
  }
}
