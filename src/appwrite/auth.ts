import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  private client;
  private account;
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteApiEndpoint)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async signUp(email: string, password: string, name: string) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login(email, password);
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
  async login(email: string, password: string) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }

  async getUserInfo() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
