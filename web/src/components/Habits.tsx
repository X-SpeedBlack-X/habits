type HabitsProps = {
  completed: number;
};
export function Habits(props: HabitsProps) {
  return <p>{props.completed}</p>;
}
