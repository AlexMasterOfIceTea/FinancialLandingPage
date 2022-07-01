import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { links } from "./Navbar";

const Icon = ({open}) => (
    <svg wdth="100%" height="auto" viewBox="0 0  100 60" stroke="black" strokeWidth="3" strokeLinecap="round">
        <line x1="0" y1="3" x2="100" y2="3" className={"transition-all duration-300 "+(open ? "rotate-45 stroke-red-500":"")}/>
        <line x1="0" y1="30" x2="100" y2="30" className={"transition-all duration-300 "+(open ? "opacity-0":"opacity-100")}/>
        <line x1="0" y1="57" x2="100" y2="57" className={"transition-all duration-300 [transform-origin:0_100%] "+(open ? "-rotate-45 stroke-red-500":"")}/>
    </svg>
);

const Button = ({ open, toggle }) => (
    <button onClick={toggle} className="w-full">
        <Icon open={open}/>
    </button >
)
const Drawer = ({ open, setOpen, children }) => (
    <Transition show={open} as={Fragment}>
        <Dialog
            unmount={false}
            onClose={() => setOpen(false)}
            className="fixed z-30 inset-0 [top:120px] overflow-y-auto"
        >
            <div className="flex w-3/4 h-max">
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-in duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-30"
                    entered="opacity-30"
                    leave="transition-opacity ease-out duration-300"
                    leaveFrom="opacity-30"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="z-40 fixed inset-0 bg-black" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div
                        className={`flex flex-col justify-between bg-zinc-50 z-50
                          w-full max-w-sm overflow-hidden text-left
                          align-middle shadow-xl rounded-r-2xl`}>
                        <div>
                            {children}
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition>
)

export const HamburgerMenu = ({ }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer
                open={open}
                setOpen={setOpen}
            >
                {links.map((v, i) => (
                    <a href={v[1]}>
                        <div
                            className={"py-8 px-4 w-full capitalize text-md "+(i%2?"bg-zinc-100":"bg-zinc-200")}
                            onClick={() => setOpen(false)}>
                            {v[0]}
                        </div>
                    </a>

                ))}
            </Drawer>
            <Button
                open={open}
                toggle={() => setOpen(o => !o)}
            />
        </>
    );
}