import { SoundPlayer, SoundPlayerConsumer } from "../src";

jest.mock("../src/soundPlayer");

const mockPlaySoundFile = jest.fn();
jest.fn().mockImplementation(() => {
  return {
    playSoundFile: jest.fn(),
  };
});

describe("手动模拟 ES6 类", () => {
  beforeEach(() => {
    // 清除所有实例化对象、构造器和方法
    (SoundPlayer as jest.Mock).mockClear();
    mockPlaySoundFile.mockClear();
  });

  test("SoundPlayer 的构造器 constructor 被调用", () => {
    new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });

  test("SoundPlay 实例上的 playSoundFile 方法被调用", () => {
    expect(SoundPlayer).not.toHaveBeenCalled(); // 检查 mockClear 是否生效

    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);

    const coolSoundFileName = "song.mp3";
    soundPlayerConsumer.playSomethingCool();

    const mockSoundPlayerInstance = (SoundPlayer as jest.Mock).mock
    .instances[0];
    const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;

    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
    expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
  });
});
