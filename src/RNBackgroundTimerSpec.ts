import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  start(delay: number): void;
  stop(): void;
  setTimeout(timeoutId:number,timeout:number): void;
}

export default TurboModuleRegistry.get<Spec>('BackgroundTimerTurboModule') as Spec | null;