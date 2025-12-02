import { useEffect, useState } from "react";
import { OMNI_SEARCH_SETTING_KEY } from "../../../shared/constants.ts";
import { getDefaultSetting } from "../../../shared/setting.ts";
import { getStorage } from "../../../shared/storage.ts";
import type { IOmniSearchSetting } from "../../../shared/types.ts";

export const useSetting = () => {
  const [setting, setSetting] = useState<IOmniSearchSetting>(() =>
    getDefaultSetting(),
  );
  // is load setting
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      try {
        const storage = await getStorage<IOmniSearchSetting>(
          OMNI_SEARCH_SETTING_KEY,
        );
        if (storage) {
          setSetting((prev) => ({ ...prev, ...storage }));
        }
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, []);

  return {
    setting,
    loading,
  };
};
