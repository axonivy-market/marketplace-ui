export interface Feedback {
  userName: string;
  userAvartarUrl: string;
  createdDate: Date;
  updatedDate?: Date;
  content: string;
  rating: number;
}
