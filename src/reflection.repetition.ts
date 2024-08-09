import "reflect-metadata";

function Injectable(key: string) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target);
    const meta = Reflect.getMetadata(key, target);
    console.log("meta", meta);
  };
}

function Param(target: Object, propertyKey: string, index: number) {
  console.log(target, propertyKey, index);
}

function Inject(key: string) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target);
    const meta = Reflect.getMetadata(key, target);
    console.log("meta", meta);
  };
}

function Props(target: Object, name: string) {}

@Injectable("C")
export class C {
  @Props prop: number;
}

@Injectable("D")
export class D {
  constructor(@Inject() c: C) {}
  @Props prop: number;
}
