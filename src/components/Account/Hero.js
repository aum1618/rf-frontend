const HeroSection = () => {
  return (
    <>
      <div className="cover-bg relative h-[70vh]">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              fill="none"
              viewBox="0 0 28 24"
            >
              <path
                fill="#fff"
                d="M14 19.333c1.666 0 3.083-.583 4.25-1.75 1.167-1.167 1.75-2.584 1.75-4.25s-.584-3.083-1.751-4.25c-1.167-1.167-2.584-1.75-4.25-1.75s-3.083.584-4.25 1.751c-1.167 1.167-1.75 2.584-1.75 4.25s.584 3.083 1.751 4.25c1.167 1.167 2.584 1.75 4.25 1.75zM14 18l-1.467-3.2-3.2-1.467 3.2-1.466 1.466-3.2 1.467 3.2 3.2 1.466-3.2 1.467-1.467 3.2zM3.332 24a2.569 2.569 0 01-1.884-.784 2.563 2.563 0 01-.783-1.883v-16c0-.733.261-1.361.784-1.884a2.563 2.563 0 011.883-.782h4.2L9.999 0h8l2.467 2.667h4.2c.733 0 1.361.261 1.884.784.523.522.784 1.15.783 1.882v16c0 .734-.262 1.362-.784 1.884a2.563 2.563 0 01-1.883.783H3.333z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
