export interface Feedback {
  userName: string;
  userAvatarUrl: string;
  createdDate: Date;
  updatedDate?: Date;
  content: string;
  rating: number;
}
