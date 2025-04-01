interface Props {
	removeItem: () => void;
}
export const ButtonRemove = ({ removeItem }: Props) => {
	return (
		<button
			onClick={removeItem}
			className='cursor-pointer rounded-3xl px-3 py-1 font-[500] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.35)] hover:bg-(--Red-500) hover:text-(--Neutral-0) dark:shadow-[0px_0px_0px_1px_rgba(248,_247,_247,_0.35)] dark:hover:text-(--Neutral-900)'
		>
			Remove
		</button>
	);
};
