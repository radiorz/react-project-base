export const NotifyContainer: React.FC = () => {
  const [notifications, setNotifications] = useState<NotifyItem[]>([]);

  const addNotification = (item: NotifyItem) => {
    setNotifications((prev) => [...prev, item]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const updateNotification = (id: string, newContent: ReactNode) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, content: newContent } : n))
    );
  };

  // 暴露方法给外部使用
  useEffect(() => {
    (window as any).notify = (
      content: (n: NotifyInstance) => ReactNode,
      options?: NotifyOptions
    ) => {
      const id = Math.random().toString(36).substr(2, 9);
      const notifyInstance: NotifyInstance = {
        close: () => removeNotification(id),
        update: (newContent) => updateNotification(id, newContent),
      };

      addNotification({
        id,
        content: content(notifyInstance),
        options,
      });

      if (options?.duration) {
        setTimeout(() => {
          removeNotification(id);
        }, options.duration);
      }

      return notifyInstance;
    };
  }, []);

  return (
    <>
      {(
        [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ] as NotifyPosition[]
      ).map((position) => {
        const positionNotifications = notifications.filter(
          (n) => n.options?.position === position
        );

        return (
          <div
            key={position}
            style={{
              position: "fixed",
              ...getPositionStyles(position),
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {positionNotifications.map((n) => (
              <NotifyItem
                key={n.id}
                content={n.content}
                options={n.options}
                onClose={() => removeNotification(n.id)}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

const getPositionStyles = (position: NotifyPosition): React.CSSProperties => {
  switch (position) {
    case "top-left":
      return { top: "10px", left: "10px" };
    case "top-right":
      return { top: "10px", right: "10px" };
    case "bottom-left":
      return { bottom: "10px", left: "10px" };
    case "bottom-right":
      return { bottom: "10px", right: "10px" };
    default:
      return { top: "10px", right: "10px" };
  }
};
