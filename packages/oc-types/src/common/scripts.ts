/**
 * Scripts executed throughout the collection lifecycle
 */

export type ScriptType = 'before-request' | 'after-response' | 'tests' | 'hooks';

export interface Script {
  type: ScriptType;
  code: string;
}

export type Scripts = Script[];
