import { css } from "@emotion/react";

interface DotSliderProps {
  ranges: string[] | number[];
  value: number;
  setValue: (val: number) => void; // state setter
  initialValue?: number;
}

function DotSlider({ ranges, value, setValue }: DotSliderProps) {
  return (
    <div css={styles.container}>
      {ranges.map((item, index) => (
        <>
          <div key={index} css={styles.dot(index, value)} onClick={() => setValue(index)}>
            {typeof item === "number" && <label css={styles.label(value === index)}>{item}</label>}
          </div>
        </>
      ))}
      <label css={styles.text}>{ranges[value]}</label>
      <div css={styles.bar(value, ranges.length)} />
    </div>
  );
}

export default DotSlider;

const styles = {
  container: css`
    width: 100%;
    max-width: 358px;
    height: 8px;
    border-radius: 4px;
    background: #d9d9d9;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;

    position: relative;
  `,

  bar: (val: number, len: number) => css`
    width: calc(${(val / (len - 1)) * 358}px);
    height: 8px;
    border-radius: 4px;
    background: #00dd9b;

    position: absolute;
    left: 0;

    z-index: 1;
  `,

  dot: (index: number, value: number) => css`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    /* border: 1px solid #00dd9b; */
    background-color: ${index <= value ? "#00dd9b" : "#d9d9d9"};

    position: relative;

    z-index: 2;
  `,

  label: (selected: boolean) => css`
    width: 50px;
    display: ${selected ? "inline" : "none"};
    color: #00dd9b;
    font-size: 13px;
    font-weight: 600;

    position: absolute;
    top: 18px;
  `,

  text: css`
    color: #00dd9b;
    font-size: 13px;
    font-weight: 600;

    position: absolute;
    top: 18px;
    left: 47%;
  `,
};
