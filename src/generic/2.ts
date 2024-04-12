

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Keys = keyof AllType;

function compare<T extends AllType, K extends Keys>(
  top: Pick<AllType, Keys>,
  bottom: Pick<AllType, Keys>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
