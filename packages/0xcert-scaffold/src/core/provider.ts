/**
 * A provider is a connection to a blockchain or other database store.
 */
export interface ProviderBase {
  accountId: string;
}

/**
 * Provider events.
 */
export enum ProviderEvent {
  ACCOUNT_CHANGE = 'accountChanged',
  NETWORK_CHANGE = 'networkChanged',
}

/**
 * Error codes.
 */
export enum ProviderIssue {
  GENERAL = 0,
  WRONG_INPUT = 1,
}

/**
 * Handled system error.
 */
export class ProviderError extends Error {

  /**
   * Specific kind of error.
   */
  public issue: ProviderIssue;

  /**
   * Original error report.
   */
  public original: any;

  /**
   * Class constructor.
   * @param issue Issue identification.
   * @param details Original error object.
   */
  public constructor(issue: ProviderIssue, original?: any) {
    super();

    this.name = 'ProviderError';
    this.issue = issue;
    this.original = original;
    this.message = `GenericProvider error [issue: ${issue}]`;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
